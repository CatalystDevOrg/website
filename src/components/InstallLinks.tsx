import React from "react";

type InstallLinksState = {
  isWindows: boolean;
};

export default class InstallLinks extends React.Component<
  null,
  InstallLinksState
> {
  state: InstallLinksState = {
    isWindows: false,
  };

  componentDidMount() {
    this.state.isWindows = window.navigator.userAgent.indexOf("Win") !== -1;
  }

  render() {
    return (
      <div className="flex flex-col gap-2 items-center justify-center">
        <div className="flex flex-row gap-4">
          <a
            href="https://github.com/catalystdevorg/catalyst"
            target="_blank"
            className="font-bold text-xl bg-black w-fit px-4 py-2 rounded-md border-white/25 border-2 shadow-md"
          >
            Learn More
          </a>
          <a
            href="https://github.com/catalystdevorg/catalyst/releases"
            target="_blank"
            className="font-bold text-xl bg-mint-400 text-black w-fit px-4 py-2 rounded-md shadow-md"
          >
            Get Catalyst -&gt;
          </a>
        </div>

        <span className="font-extralight">- or -</span>
        <div className="font-mono font-normal bg-deepblue border-white/10 border-2 p-2 rounded-lg text-left text-sm shadow-md">
          scoop bucket add ctlyst https://github.com/JaydenDev/ctlyst-bucket
          <br />
          scoop install ctlyst
        </div>
      </div>
    );
  }
}
