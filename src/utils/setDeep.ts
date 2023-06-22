import { produce, Draft } from 'immer';

export const setDeep = <T>(setter: React.Dispatch<React.SetStateAction<T>>, field: string, value: any) => {
  setter((prevState) =>
    produce(prevState, (draftState: Draft<any>) => {
      const pathSegments = field.split('.');
      const lastSegmentIndex = pathSegments.length - 1;
      let nestedObject: any = draftState;

      for (let i = 0; i < lastSegmentIndex; i++) {
        const pathSegment = pathSegments[i];
        if (nestedObject[pathSegment] === undefined) {
          nestedObject[pathSegment] = {};
        }
        nestedObject = nestedObject[pathSegment];
      }

      const lastPathSegment = pathSegments[lastSegmentIndex];
      nestedObject[lastPathSegment] = value;
    })
  );
};
