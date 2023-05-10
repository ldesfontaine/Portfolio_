export class Project{
  constructor(
    public imageUrl: string,
    public title: string,
    public description: string,
    // public site_link: string, site_link need to be optional,
    // because it's not always present
    //don't show the button if the link is not present
    public site_link?: string,
    public github_link?: string){

  }
}
