import AnimeDetailHeader from '@/components/anime/AnimeDetailHeader'
import EpisodeList from '@/components/anime/EpisodeList'
import Navbar from '@/components/common/Navbar'
import { getAnimeById } from '@/lib/animeService'

export default async function AnimeDetail({
  params,
}: {
  params: { id: string }
}) {
  const anime = await getAnimeById(params.id)
  
  return (
    <div className="min-h-screen bg-[#121212]">
      <Navbar />
      <AnimeDetailHeader anime={anime} />
      <div className="container mx-auto px-4 py-8">
        <EpisodeList 
          animeId={anime.id}
          episodes={anime.episodes} 
        />
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4">About</h2>
          <p className="text-gray-300">{anime.description}</p>
        </section>
      </div>
    </div>
  )
}
