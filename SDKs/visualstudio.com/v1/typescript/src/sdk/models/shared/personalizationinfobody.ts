import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PersonalizationInfoBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=dotfilesInstallCommand" })
  dotfilesInstallCommand?: string;

  @Metadata({ data: "json, name=dotfilesRepository" })
  dotfilesRepository?: string;

  @Metadata({ data: "json, name=dotfilesTargetPath" })
  dotfilesTargetPath?: string;
}
