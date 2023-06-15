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
      <div className="flex flex-col gap-2 items-center justify-center">
        <div className="flex flex-row gap-4">
          <a
            href="https://github.com/catalystdevorg/catalyst"
            target="_blank"
            className="button bg-black border-white/25 border-2"
          >
            Learn More
          </a>
          <a
            href="https://github.com/catalystdevorg/catalyst/releases"
            target="_blank"
            className="button bg-mint-400 text-black"
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
        <br />
        <span className="font-extralight">Debian/Ubuntu Linux</span>
        <div className="font-mono font-normal bg-deepblue border-white/10 border-2 p-2 rounded-lg text-left text-sm shadow-md">
           curl -s --compressed "https://catalystdevorg.github.io/Debian/KEY.gpg" | gpg --dearmor | sudo tee /etc/apt/trusted.gpg.d/Debian.gpg
          <br />
          sudo curl -s --compressed -o /etc/apt/sources.list.d/repository.list "https://catalystdevorg.github.io/Debian/repository.list
          <br />
          sudo apt update
          <br />
          sudo apt install catalyst
        </div>
      </div>
    );
  }
}
