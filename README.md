# WheresMyPet

A web app designed to build a community focused on finding lost pets!

## Development workflow

### Project forking
Right after cloning the project, make sure you install the local git hooks to code according to the project's patterns.
- Copy the content from the git-hooks directory to .git/hooks
- Set the access control so these files can be executed by Git

Commands below for Linux users:
```
cp ./git-hooks/pre-commit .git/hooks/pre-commit
chmod +x .git/hooks/pre-commit
cp ./git-hooks/commit-msg .git/hooks/commit-msg
chmod +x .git/hooks/commit-msg
```

## Development server
Run `yarn start` for a dev server. Navigate to `http://localhost:4200/`.

## Build
Run `yarn build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests
Run `yarn test` to execute the unit tests via Jest.