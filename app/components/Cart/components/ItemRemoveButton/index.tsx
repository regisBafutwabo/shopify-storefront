import {useFetcher} from '@remix-run/react';

import {IconRemove} from '../IconRemove';

export const ItemRemoveButton = ({lineIds}: {lineIds: any}) => {
  const fetcher = useFetcher();

  return (
    <fetcher.Form action="/cart" method="post">
      <input type="hidden" name="cartAction" value="REMOVE_FROM_CART" />
      <input type="hidden" name="linesIds" value={JSON.stringify(lineIds)} />
      <button
        className="bg-white border-black text-black hover:text-white hover:bg-black rounded-md font-small text-center my-2 max-w-xl leading-none border w-10 h-10 flex items-center justify-center"
        type="submit"
      >
        <IconRemove />
      </button>
    </fetcher.Form>
  );
}