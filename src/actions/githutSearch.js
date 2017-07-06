/* 
 * @flow
 */

export const CALL_LOADING = 'CALL_LOADING';
export const SEARCH_GITHUB = 'SEARCH_GITHUB';

export function githutSearch(arg) {
	return async (dispatch) => {
		// init loading
		dispatch({ type: CALL_LOADING });

		try {
			// Fetch API search Username
			const response = await fetch(`https://api.github.com/users/${arg}`);
			const results = await response.json();

			// Fetch API search repos
			const responseRepos = await fetch(`https://api.github.com/users/${arg}/repos`);
			const repos = await responseRepos.json();

			return dispatch({ 
				type: SEARCH_GITHUB, 
				results,
				repos
			});
		} catch (error) {
		  console.log(error)
		}
	}
}

export default githutSearch