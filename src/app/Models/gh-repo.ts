export class GhRepo {

    constructor(
        public name: string,
        public html_url: string,
        public description: string,
        public created_at: Date,
        public forks: number,
        public watchers_count: number,
        public language: string
    ) { }
    
}
