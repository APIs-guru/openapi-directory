import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PersonalizationInfoBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dotfilesInstallCommand" })
  dotfilesInstallCommand?: string;

  @SpeakeasyMetadata({ data: "json, name=dotfilesRepository" })
  dotfilesRepository?: string;

  @SpeakeasyMetadata({ data: "json, name=dotfilesTargetPath" })
  dotfilesTargetPath?: string;
}
