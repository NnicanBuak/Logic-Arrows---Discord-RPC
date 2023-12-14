importScripts('https://cdn.jsdelivr.net/npm/discord-rpc')
const clientId = '1184804120650055700'

const rpc = new DiscordRPC.Client({ transport: 'ipc' });

rpc.on('ready', () => {
	console.log('Discord Rich Presence connected!')
})

rpc.login({ clientId }).catch(console.error)

function setRPC(userId, mapName) {
	rpc.setActivity({
		state: mapName ? `working in ${mapName}` : 'in menu',
		details: '',
		startTimestamp: new Date(),
		largeImageKey: 'https://media.discordapp.net/attachments/1173907986104717362/1184821550327791686/Logic_Arrows_Logo.png?ex=658d5e0e&is=657ae90e&hm=fa45b2487045786127f86a605cf5cc062b3eb7af0e98210676acf1908e562793&=&format=webp&quality=lossless&width=269&height=269',
		largeImageText: 'Logic Arrows',
		buttons: [{ label: 'Open map', url: window.location.href }],
		userId: userId,
	})
}

// example
setRPC('314934381779222534', 'tic tac toe')