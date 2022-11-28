import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TeamEventStatusAllianceBackup } from "./teameventstatusalliancebackup";



export class TeamEventStatusAlliance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backup" })
  backup?: TeamEventStatusAllianceBackup;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number: number;

  @SpeakeasyMetadata({ data: "json, name=pick" })
  pick: number;
}
