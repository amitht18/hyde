import { useState } from "react";
import { Word } from "../../types/word.type";
import constate from "constate";

function useWordState({ initialState = []}) {
  const [words, setWords] = useState<Word[]>(initialState);
  const addWord = (word: Word) => setWords([...words, word]);
  return { words, addWord };
}

export const [WordStateProvider, useWord, setWord] = constate(
  useWordState,
  value => value.words,
  value => value.addWord
);

function useFilterState({searchTerm = ''}) {
  const [searchString, updateSearchString] = useState<string>(searchTerm);
  return {searchString, updateSearchString}
}

export const [FilterStateProvider, useFilterStateContext] = constate(useFilterState)