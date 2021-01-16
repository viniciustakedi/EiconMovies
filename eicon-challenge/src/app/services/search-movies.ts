export interface SearchMovie {
    adult: boolean
    backdrop_path: string
    belongs_to_collection: string
    budget: number
    genres: {
        id: number
        name: string
    }
    homepage: string
    id: number
    imdb_id: string
    original_language: string
    original_title: string
    vote_count: number
}