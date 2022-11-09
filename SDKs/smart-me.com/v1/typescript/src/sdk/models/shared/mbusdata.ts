import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class MBusData extends SpeakeasyBase {
  @Metadata({ data: "json, name=Date, form, name=Date;" })
  date?: Date;

  @Metadata({ data: "json, name=Telegram, form, name=Telegram;" })
  telegram?: string;
}
