import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class V3StopTicket extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=is_free_fare_zone" })
  isFreeFareZone?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ticket_checks" })
  ticketChecks?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ticket_machine" })
  ticketMachine?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ticket_type" })
  ticketType?: string;

  @SpeakeasyMetadata({ data: "json, name=ticket_zones" })
  ticketZones?: number[];

  @SpeakeasyMetadata({ data: "json, name=vline_reservation" })
  vlineReservation?: boolean;

  @SpeakeasyMetadata({ data: "json, name=zone" })
  zone?: string;
}
