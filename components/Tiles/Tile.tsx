type Props = {
  letter?: string;
}

export const Tile = ({ letter }: Props) => (
  <div className="bg-gray-400 h-16">
    {letter}
  </div>
);