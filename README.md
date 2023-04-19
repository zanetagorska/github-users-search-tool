# Github Users Search Tool

## Project setup

```
npm i
```

### Start Vite dev server

```
npm run dev
```

### Build for production

```
npm run build
```

### Locally preview production build

```
npm run preview
```

## Requirements

You need to create a github users search tool.
On the main page there should be an input field where you need to enter a username.
Below should be a filtered list of users.
There should be an implementation of pagination (infinite scroll).

Clicking on a row should open the user's page with additional information about him:

- avatar image,
- name,
- followers,
- following,
- company,
- email,
- blog

This project should be written using React. Using Typescript would be a plus.
We would also appreciate the use of any state management and UI libraries.

REST API doc: <https://docs.github.com/en/rest>
Graphql API doc: <https://api.github.com/graphql>

### TODO list

- [x] Fetch users list
- [x] Search by phrase
- [x] Pagination & Infinite scroll
- [x] Add route for user's details page
- [x] Fetch & display user's data
- [x] Update Readme
- [x] [Optional] Add some nice css styling
- [ ] [Optional] Resolve @TODOs
- [ ] [Optional] Use Redux for store management
- [ ] [Optional] Add tests
- [ ] [Optional] Add Vite import alias
- [ ] [Optional] Add linter + prettier
