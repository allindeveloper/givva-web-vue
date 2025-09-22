import type { CreateCurationFormType } from "@/types/curation";
import { v4 as uuidv4 } from "uuid";

const STORAGE_KEY = "curations";

export function initCurations(dummy: CreateCurationFormType[]) {
  const existing = localStorage.getItem(STORAGE_KEY);
  if (!existing) {
    const curationsWithIds: CreateCurationFormType[] = dummy.map((c) => ({
      ...c,
      id: uuidv4(),
      createdMs: Date.now()
    }));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(curationsWithIds));
    return curationsWithIds;
  }
  return JSON.parse(existing) as CreateCurationFormType[];
}

export function addCuration(
  data: CreateCurationFormType,
): CreateCurationFormType {
  const curations = getCurations();
  const newCuration: CreateCurationFormType = { ...data, id: uuidv4(), createdMs: Date.now() };
  curations.unshift(newCuration);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(curations));
  return newCuration;
}

// export function addCuration(
//   data: CreateCurationFormType,
// ): CreateCurationFormType {
//   const newCuration = { ...data, id: uuidv4(), createdMs: Date.now() };

//   const curations = getCurations();
//   const newCurations: CreateCurationFormType[] = [newCuration, ...curations];
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(newCurations));
//   return newCuration;
// }

export function getCurations(): CreateCurationFormType[] {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? (JSON.parse(raw) as CreateCurationFormType[]).sort((a,b) => (b?.createdMs ?? 0) - (a.createdMs ?? 0)) : [];
}

export function getCurationById(
  id: string,
): CreateCurationFormType | undefined {
  const curations = getCurations();
  return curations.find((c) => c.id === id);
}
