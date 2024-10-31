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
        <h1 className="text-xl">Catalyst v5 Alpha</h1>
        <p className="font-normal">Catalyst v5 is an attempt to move away from Electron. It instead uses Python + PyQt6 with PyQtWebEngine. Very early in development with a decent amount of functionality.</p>
        <div className="flex flex-row gap-4">
          <a
            href="https://github.com/catalystdevorg/catalyst5"
            target="_blank"
            title="Learn more about Catalyst v5"
            className="button bg-black border-white/25 border-2"
          >
            Source Code
          </a>
          <a
            href="https://github.com/catalystdevorg/catalyst5/releases/latest"
            target="_blank"
            title="Regular stable releases."
            className="button bg-mint-400 text-black"
          >
            Get Alpha (Windows, Linux)
          </a>
        </div>
      </div>
    );
  }
}
