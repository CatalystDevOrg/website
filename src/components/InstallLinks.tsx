import React from "react";

type InstallLinksState = {
  isWindows: boolean;
};

export default class InstallLinks extends React.Component<
  Record<string, never>,
  InstallLinksState
> {
  state: InstallLinksState = {
    isWindows: false,
  };

  constructor(props: Record<string, never>) {
    super(props);
  }

  componentDidMount() {
    this.state.isWindows = window.navigator.userAgent.indexOf("Win") !== -1;
  }

  render() {
    return (
      <div className="flex flex-col m-4 gap-2 items-center justify-center">
        <div className="flex flex-row gap-4">
          <a
            href="https://github.com/catalystdevorg/catalyst"
            target="_blank"
            className="button bg-black border-white/25 border-2"
          >
            Learn More
          </a>
          <a
            href="https://github.com/catalystdevorg/catalyst/releases/latest"
            target="_blank"
            className="button bg-mint-400 text-black"
          >
            Get Catalyst
          </a>
        </div>
        <br style={{lineHeight: "16pt"}}/>
        <h1 className="text-xl">Advanced Options</h1>
        <div className="flex flex-row gap-4">
          <a
            href="https://github.com/CatalystDevOrg/Catalyst/releases?q=beta"
            target="_blank"
            className="button bg-orange-400 text-white border-white/25 border-2"
          >
            Get Beta
          </a>
        </div>
      </div>
    );
  }
}
