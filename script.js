const glob = require('@actions/glob');

const getFiles = async () => {
	const patterns = ['**/*.[jt]s', '**/*.[jt]sx']
const globber = await glob.create(patterns.join('\n'))
const files = await globber.glob()

console.log(files)
}

getFiles()

