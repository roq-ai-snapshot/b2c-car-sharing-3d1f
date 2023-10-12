/* eslint-disable */
import useSWR from 'swr';
import type { Prisma } from './types';
import { DefaultArgs, GetFindResult } from './types/runtime/library';
import { useRoqClient } from './roq-client-provider';
import { SWRRequestOptions, RequestOptions } from './roq-sdk';

export function useBookingFindMany<
  T extends Prisma.bookingFindManyArgs,
  R extends GetFindResult<Prisma.$bookingPayload<DefaultArgs>, T>[],
>(
  args?: Prisma.SelectSubset<T, Prisma.bookingFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useBookingFindMany', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.booking.findMany(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useBookingCount<T extends Prisma.bookingCountArgs, R extends number>(
  args?: Prisma.SelectSubset<T, Prisma.bookingCountArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useBookingCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.booking.count(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useBookingFindManyWithCount<
  T extends Prisma.bookingFindManyArgs,
  R extends { data: GetFindResult<Prisma.$bookingPayload<DefaultArgs>, T>[]; count: number },
>(
  args?: Prisma.SelectSubset<T, Prisma.bookingFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useBookingFindManyWithCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.booking.findManyWithCount(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useBookingFindFirst<
  T extends Prisma.bookingFindFirstArgs,
  R extends GetFindResult<Prisma.$bookingPayload<DefaultArgs>, T>,
>(
  args?: Prisma.SelectSubset<T, Prisma.bookingFindFirstArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useBookingFindFirst', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.booking.findFirst(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useCarFindMany<
  T extends Prisma.carFindManyArgs,
  R extends GetFindResult<Prisma.$carPayload<DefaultArgs>, T>[],
>(args?: Prisma.SelectSubset<T, Prisma.carFindManyArgs>, options?: RequestOptions, swrOptions?: SWRRequestOptions<R>) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useCarFindMany', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.car.findMany(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useCarCount<T extends Prisma.carCountArgs, R extends number>(
  args?: Prisma.SelectSubset<T, Prisma.carCountArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useCarCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.car.count(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useCarFindManyWithCount<
  T extends Prisma.carFindManyArgs,
  R extends { data: GetFindResult<Prisma.$carPayload<DefaultArgs>, T>[]; count: number },
>(args?: Prisma.SelectSubset<T, Prisma.carFindManyArgs>, options?: RequestOptions, swrOptions?: SWRRequestOptions<R>) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useCarFindManyWithCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.car.findManyWithCount(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useCarFindFirst<
  T extends Prisma.carFindFirstArgs,
  R extends GetFindResult<Prisma.$carPayload<DefaultArgs>, T>,
>(args?: Prisma.SelectSubset<T, Prisma.carFindFirstArgs>, options?: RequestOptions, swrOptions?: SWRRequestOptions<R>) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useCarFindFirst', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.car.findFirst(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useCarLocationFindMany<
  T extends Prisma.car_locationFindManyArgs,
  R extends GetFindResult<Prisma.$car_locationPayload<DefaultArgs>, T>[],
>(
  args?: Prisma.SelectSubset<T, Prisma.car_locationFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useCarLocationFindMany', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.car_location.findMany(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useCarLocationCount<T extends Prisma.car_locationCountArgs, R extends number>(
  args?: Prisma.SelectSubset<T, Prisma.car_locationCountArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useCarLocationCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.car_location.count(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useCarLocationFindManyWithCount<
  T extends Prisma.car_locationFindManyArgs,
  R extends { data: GetFindResult<Prisma.$car_locationPayload<DefaultArgs>, T>[]; count: number },
>(
  args?: Prisma.SelectSubset<T, Prisma.car_locationFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useCarLocationFindManyWithCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.car_location.findManyWithCount(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useCarLocationFindFirst<
  T extends Prisma.car_locationFindFirstArgs,
  R extends GetFindResult<Prisma.$car_locationPayload<DefaultArgs>, T>,
>(
  args?: Prisma.SelectSubset<T, Prisma.car_locationFindFirstArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useCarLocationFindFirst', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.car_location.findFirst(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useCompanyFindMany<
  T extends Prisma.companyFindManyArgs,
  R extends GetFindResult<Prisma.$companyPayload<DefaultArgs>, T>[],
>(
  args?: Prisma.SelectSubset<T, Prisma.companyFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useCompanyFindMany', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.company.findMany(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useCompanyCount<T extends Prisma.companyCountArgs, R extends number>(
  args?: Prisma.SelectSubset<T, Prisma.companyCountArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useCompanyCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.company.count(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useCompanyFindManyWithCount<
  T extends Prisma.companyFindManyArgs,
  R extends { data: GetFindResult<Prisma.$companyPayload<DefaultArgs>, T>[]; count: number },
>(
  args?: Prisma.SelectSubset<T, Prisma.companyFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useCompanyFindManyWithCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.company.findManyWithCount(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useCompanyFindFirst<
  T extends Prisma.companyFindFirstArgs,
  R extends GetFindResult<Prisma.$companyPayload<DefaultArgs>, T>,
>(
  args?: Prisma.SelectSubset<T, Prisma.companyFindFirstArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useCompanyFindFirst', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.company.findFirst(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useLocationFindMany<
  T extends Prisma.locationFindManyArgs,
  R extends GetFindResult<Prisma.$locationPayload<DefaultArgs>, T>[],
>(
  args?: Prisma.SelectSubset<T, Prisma.locationFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useLocationFindMany', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.location.findMany(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useLocationCount<T extends Prisma.locationCountArgs, R extends number>(
  args?: Prisma.SelectSubset<T, Prisma.locationCountArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useLocationCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.location.count(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useLocationFindManyWithCount<
  T extends Prisma.locationFindManyArgs,
  R extends { data: GetFindResult<Prisma.$locationPayload<DefaultArgs>, T>[]; count: number },
>(
  args?: Prisma.SelectSubset<T, Prisma.locationFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useLocationFindManyWithCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.location.findManyWithCount(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useLocationFindFirst<
  T extends Prisma.locationFindFirstArgs,
  R extends GetFindResult<Prisma.$locationPayload<DefaultArgs>, T>,
>(
  args?: Prisma.SelectSubset<T, Prisma.locationFindFirstArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useLocationFindFirst', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.location.findFirst(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useUserFindMany<
  T extends Prisma.userFindManyArgs,
  R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>[],
>(args?: Prisma.SelectSubset<T, Prisma.userFindManyArgs>, options?: RequestOptions, swrOptions?: SWRRequestOptions<R>) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useUserFindMany', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.user.findMany(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useUserCount<T extends Prisma.userCountArgs, R extends number>(
  args?: Prisma.SelectSubset<T, Prisma.userCountArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useUserCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.user.count(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useUserFindManyWithCount<
  T extends Prisma.userFindManyArgs,
  R extends { data: GetFindResult<Prisma.$userPayload<DefaultArgs>, T>[]; count: number },
>(args?: Prisma.SelectSubset<T, Prisma.userFindManyArgs>, options?: RequestOptions, swrOptions?: SWRRequestOptions<R>) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useUserFindManyWithCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.user.findManyWithCount(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useUserFindFirst<
  T extends Prisma.userFindFirstArgs,
  R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>,
>(
  args?: Prisma.SelectSubset<T, Prisma.userFindFirstArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useUserFindFirst', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.user.findFirst(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}
