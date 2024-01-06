import * as todoService from "./services/todo-service";

async function run() {
	try {
		const create = await todoService.create('Crete node application');
		console.log('create result >>>');
		console.log(create);

		const find = await todoService.find();
		console.log('find result >>>');
		console.log(find);

		const findById = await todoService.findById(create.insertedId.toHexString());
		console.log('findById result >>>');
		console.log(findById);

		const update = await todoService.update(create.insertedId.toHexString(), { done: true });
		console.log('update result >>>');
		console.log(update);

		const deleteById = await todoService.deleteById(create.insertedId.toHexString());
		console.log('deleteById result >>>');
		console.log(deleteById);
	} catch (error) {
		console.log(error);
	} finally {
		setTimeout(function () {
			process.exit();
		}, 1000);
	}
}

run().catch(console.dir);