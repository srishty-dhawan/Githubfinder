class Github {
  constructor()
  {
    //site https://github.com/settings/applications/1388624
    this.client_id='795188160edba45ab54a';
    this.client_secret='321f9ba82305623b15477964d2f76c98722af8ca';
    this.repos_count=5; //we r doing this to give us 5 repos not all the repos of user
    this.repos_sort='created: asc'; //these are query strings we can use in our formats
  }

  async getUser(user)
  {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profileData= await profileResponse.json();
    const reposData= await repoResponse.json();

    return {
      profile : profileData,
      repos: reposData
    }
  }

}