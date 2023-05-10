import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



interface GitHubEvent {
  type: string;
  payload: {
    commits: {
      message: string;
    }[];
  };
}

interface Repository {
  name: string;
  html_url: string;
  description: string;
  language: string;
  pushed_at: string;
  stargazers_count: number;
  pinned: boolean;
  imageURL?: string; // initialisé avec une chaîne vide
  homepage?: string;
}
@Component({
  selector: 'app-github-projects',
  templateUrl: './github-projects.component.html',
  styleUrls: ['./github-projects.component.scss']
})
export class GithubProjectsComponent implements OnInit {

  username: string = 'ldesfontaine';
  projects: Repository[] = [];
  events: GitHubEvent[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getProjects();
    this.getEvents();
  }

  getProjects() {
    this.http.get<Repository[]>(`https://api.github.com/users/${this.username}/repos`)
      .subscribe((data: Repository[]) => {
        // Mettre en avant les repos pins
        data.forEach((repo) => {
          if (repo.stargazers_count > 0) {
            repo.pinned = true;
          }
          // Récupérer l'URL de l'image
          this.http.get(`https://api.github.com/repos/${this.username}/${repo.name}/assets/images/repo.png`)
            .subscribe((imageData: any) => {
              repo.imageURL = imageData.download_url;
            }, (error: any) => {
              // L'image n'existe pas
              repo.imageURL = "";
            });
        });
        // Trier les repos par date de dernière modification
        data.sort((a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime());
        this.projects = data;
      });
  }


  getEvents() {
    this.http.get<GitHubEvent[]>(`https://api.github.com/users/${this.username}/events`)
      .subscribe((data: GitHubEvent[]) => {
        // Filtrer les événements par type (commits, merges et pushs)
        this.events = data.filter((event) => {
          return event.type === 'PushEvent' || event.type === 'PullRequestEvent' || event.type === 'MergeEvent';
        });
      });
  }

}
