
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  // Mengambil respons dari server utama
  let response = await fetch('https://royale.midasbuyplus.com')

  // Memodifikasi respons jika diperlukan
  let modifiedResponse = new Response(response.body, response)

  // Menambahkan header atau melakukan manipulasi lainnya
  modifiedResponse.headers.set('Content-Type', 'text/html')

  // Mengirim respons yang sudah dimodifikasi
  return modifiedResponse
}
