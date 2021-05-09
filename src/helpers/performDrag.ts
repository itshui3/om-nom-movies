import produce from 'immer';

import { Result } from '../interfaces/Result';

export const performDrag = (startId: number, endId: number, nomList: Result[]): Result[] => {
/*
injection swap array from startId until swapped with endId
*/

    return produce(nomList, draft => {

        let i = startId;

        if (startId > endId) {
            while (i > endId) {
                [draft[i], draft[i-1]] = [draft[i-1], draft[i]];
                i--;
            }
        } else {
            while (i < endId) {
                [draft[i], draft[i+1]] = [draft[i+1], draft[i]];
                i++;
            }
        }

        return draft;

    })
}