import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class V3Outlet extends SpeakeasyBase {
  @Metadata({ data: "json, name=outlet_business" })
  outletBusiness?: string;

  @Metadata({ data: "json, name=outlet_business_hour_fri" })
  outletBusinessHourFri?: string;

  @Metadata({ data: "json, name=outlet_business_hour_mon" })
  outletBusinessHourMon?: string;

  @Metadata({ data: "json, name=outlet_business_hour_sat" })
  outletBusinessHourSat?: string;

  @Metadata({ data: "json, name=outlet_business_hour_sun" })
  outletBusinessHourSun?: string;

  @Metadata({ data: "json, name=outlet_business_hour_thur" })
  outletBusinessHourThur?: string;

  @Metadata({ data: "json, name=outlet_business_hour_tue" })
  outletBusinessHourTue?: string;

  @Metadata({ data: "json, name=outlet_business_hour_wed" })
  outletBusinessHourWed?: string;

  @Metadata({ data: "json, name=outlet_latitude" })
  outletLatitude?: number;

  @Metadata({ data: "json, name=outlet_longitude" })
  outletLongitude?: number;

  @Metadata({ data: "json, name=outlet_name" })
  outletName?: string;

  @Metadata({ data: "json, name=outlet_notes" })
  outletNotes?: string;

  @Metadata({ data: "json, name=outlet_postcode" })
  outletPostcode?: number;

  @Metadata({ data: "json, name=outlet_slid_spid" })
  outletSlidSpid?: string;

  @Metadata({ data: "json, name=outlet_suburb" })
  outletSuburb?: string;
}
