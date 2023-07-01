const API = "https://api.themoviedb.org/3";
export function get(path) {
    return fetch(API + path, {
        headers: {
            Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Y2RhZDI1OWU4YzEwNzYyMDRjN2I5ZmU5MzRhZDUyYSIsInN1YiI6IjY0OWIzNmRhMDdlMjgxMDBlMmI5ODViYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RMNM9lf3Y1lFfGSTvVHS1l2FeqEvdEwFayv2JWt4Q3I",
            "Content-Type": "application/json;charset=utf-8",
        },
    }).then((result) => result.json());
}
