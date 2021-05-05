import produce from 'immer';

import { Result } from '../../interfaces/Result';

export const performDrag = (startId: number, endId: number, nomList: Result[]): Result[] => {
/*
injection swap array from startId until swapped with endId
*/

    return produce(nomList, draft => {

        let i = startId;

        while (i !== endId) {

            let mod_i = startId > endId ? i-1 : i+1;

            [draft[i], draft[mod_i]] = [draft[mod_i], draft[i]]

            if (startId > endId) i--;
            if (endId > startId) i++;
        }

        return draft;

    })
}