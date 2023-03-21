const DrumPad = ({ audioSource, audioId, drumPadId, keyLabel, onClick }) => {
  return (
    <button id={drumPadId} className="drum-pad" onClick={onClick}>
      <audio id={audioId} className="clip" src={audioSource}></audio>
      {keyLabel}
    </button>
  );
};

export default DrumPad;
