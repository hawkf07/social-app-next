import { useState } from "react";
import create from "zustand";

interface useVotesStoreType {
  votesCount: number;
  voteType: number;
  incrementVotes: () => void;
  decrementVotes: () => void;
}

const useVotesStore = create<useVotesStoreType>((set, get) => {
  return {
    incrementVotes() {
      const { votesCount, voteType } = get();
      set({
        voteType: voteType == 1 ? 0 : 1,
        votesCount: votesCount + 1,
      });
    },
    decrementVotes() {
      set({
        voteType: this.voteType === -1 ? 0 : -1,
        votesCount: this.votesCount - 1,
      });
    },
    votesCount: 0,
    voteType: 0,
  };
});

export { useVotesStore };
