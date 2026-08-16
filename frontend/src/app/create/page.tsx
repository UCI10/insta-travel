import TravelSettings from '@/features/travel-settings/components/travel-settings';
import ItineraryPreview from '@/features/itinerary-preview/components/itinerary-preview';

const Create = () => {
  return (
    <div>
      <main className="flex justify-center items-start">
        <ItineraryPreview />
        <TravelSettings />
      </main>
    </div>
  );
}

export default Create;
