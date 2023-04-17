import {flattenConnection} from '@shopify/hydrogen';

import {LineItem} from '../LineItem';

export const CartLineItems = ({linesObj}: {linesObj: any}) => {
  const lines: any[] = flattenConnection(linesObj);

  return (
    <div className="space-y-8">
      {lines.map((line) => {
        return <LineItem key={line.id} lineItem={line} />;
      })}
    </div>
  );
};
