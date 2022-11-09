import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TeamEventStatusAllianceBackup } from "./teameventstatusalliancebackup";


export class TeamEventStatusAlliance extends SpeakeasyBase {
  @Metadata({ data: "json, name=backup" })
  backup?: TeamEventStatusAllianceBackup;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=number" })
  number: number;

  @Metadata({ data: "json, name=pick" })
  pick: number;
}
