import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MBusData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Date, form, name=Date;" })
  date?: Date;

  @SpeakeasyMetadata({ data: "json, name=Telegram, form, name=Telegram;" })
  telegram?: string;
}
