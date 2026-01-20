# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Added

- No additions yet

### Fixed

- No fixes yet

## [1.0.0] - 2026-01-20

### Changed

- Complete overhaul of the `grunt-call-rollup` plugin
- Rewrote all core modules (`lib/constants.js`, `lib/index.js`, `lib/options/*`, `lib/tasks/*`)
- Converted all asynchronous code to use `async/await` consistently
- Replaced Promise chains in `toArgs`, `getPackage`, `readConfig`, `execute`, and `runTask`
- Introduced `structuredClone` in `toArgs` to safely clone optional task options
- Standardized JSDoc comments for all modules and functions
- Headers unified across all source files
- Updated tests to match new async structure; 100% coverage maintained
- Improved documentation links and references for jsdoc2md generation

## [0.0.2] - 2024-08-26

- Fixed rollup plugin commonjs properties

## [0.0.1] - 2024-08-26

Initial version
