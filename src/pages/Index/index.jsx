import PlayBill from './PlayBill';
import Museum from './Museum';
import Events from './Events';
import Streams from './Streams';
import Excursions from './Excursions';

export default function Index() {
  return (
    <div className="page">
      <PlayBill />
      <Events />
      <Museum />
      <Streams />
      <Excursions />
    </div>
  );
}
