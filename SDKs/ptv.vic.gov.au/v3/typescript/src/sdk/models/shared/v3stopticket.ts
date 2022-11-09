import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class V3StopTicket extends SpeakeasyBase {
  @Metadata({ data: "json, name=is_free_fare_zone" })
  isFreeFareZone?: boolean;

  @Metadata({ data: "json, name=ticket_checks" })
  ticketChecks?: boolean;

  @Metadata({ data: "json, name=ticket_machine" })
  ticketMachine?: boolean;

  @Metadata({ data: "json, name=ticket_type" })
  ticketType?: string;

  @Metadata({ data: "json, name=ticket_zones" })
  ticketZones?: number[];

  @Metadata({ data: "json, name=vline_reservation" })
  vlineReservation?: boolean;

  @Metadata({ data: "json, name=zone" })
  zone?: string;
}
