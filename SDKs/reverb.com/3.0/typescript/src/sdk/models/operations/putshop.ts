import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutShopRequestBodyAddress extends SpeakeasyBase {
  @Metadata({ data: "json, name=country_code" })
  countryCode?: string;

  @Metadata({ data: "json, name=extended_address" })
  extendedAddress?: string;

  @Metadata({ data: "json, name=locality" })
  locality?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=phone" })
  phone?: string;

  @Metadata({ data: "json, name=postal_code" })
  postalCode?: string;

  @Metadata({ data: "json, name=region" })
  region?: string;

  @Metadata({ data: "json, name=street_address" })
  streetAddress?: string;
}

export enum PutShopRequestBodyCurrencyEnum {
    Usd = "USD"
,    Cad = "CAD"
,    Eur = "EUR"
,    Gbp = "GBP"
,    Aud = "AUD"
,    Jpy = "JPY"
,    Nzd = "NZD"
,    Mxn = "MXN"
}

export enum PutShopRequestBodyLegalCountryCodeEnum {
    Ad = "AD"
,    Ae = "AE"
,    Af = "AF"
,    Ag = "AG"
,    Ai = "AI"
,    Al = "AL"
,    Am = "AM"
,    Ao = "AO"
,    Ar = "AR"
,    As = "AS"
,    At = "AT"
,    Au = "AU"
,    Aw = "AW"
,    Ax = "AX"
,    Az = "AZ"
,    Ba = "BA"
,    Bb = "BB"
,    Bd = "BD"
,    Be = "BE"
,    Bf = "BF"
,    Bg = "BG"
,    Bh = "BH"
,    Bi = "BI"
,    Bj = "BJ"
,    Bl = "BL"
,    Bm = "BM"
,    Bn = "BN"
,    Bo = "BO"
,    Bq = "BQ"
,    Br = "BR"
,    Bs = "BS"
,    Bt = "BT"
,    Bv = "BV"
,    Bw = "BW"
,    By = "BY"
,    Bz = "BZ"
,    Ca = "CA"
,    Cc = "CC"
,    Cd = "CD"
,    Cf = "CF"
,    Cg = "CG"
,    Ch = "CH"
,    Ci = "CI"
,    Ck = "CK"
,    Cl = "CL"
,    Cm = "CM"
,    Cn = "CN"
,    Co = "CO"
,    Cr = "CR"
,    Cv = "CV"
,    Cw = "CW"
,    Cx = "CX"
,    Cy = "CY"
,    Cz = "CZ"
,    De = "DE"
,    Dj = "DJ"
,    Dk = "DK"
,    Dm = "DM"
,    Do = "DO"
,    Dz = "DZ"
,    Ec = "EC"
,    Ee = "EE"
,    Eg = "EG"
,    Eh = "EH"
,    Er = "ER"
,    Es = "ES"
,    Et = "ET"
,    Fi = "FI"
,    Fj = "FJ"
,    Fk = "FK"
,    Fm = "FM"
,    Fo = "FO"
,    Fr = "FR"
,    Ga = "GA"
,    Gb = "GB"
,    Gd = "GD"
,    Ge = "GE"
,    Gf = "GF"
,    Gg = "GG"
,    Gh = "GH"
,    Gi = "GI"
,    Gl = "GL"
,    Gm = "GM"
,    Gn = "GN"
,    Gp = "GP"
,    Gq = "GQ"
,    Gr = "GR"
,    Gs = "GS"
,    Gt = "GT"
,    Gu = "GU"
,    Gw = "GW"
,    Gy = "GY"
,    Hk = "HK"
,    Hm = "HM"
,    Hn = "HN"
,    Hr = "HR"
,    Ht = "HT"
,    Hu = "HU"
,    Id = "ID"
,    Ie = "IE"
,    Il = "IL"
,    Im = "IM"
,    In = "IN"
,    Io = "IO"
,    Iq = "IQ"
,    Is = "IS"
,    It = "IT"
,    Je = "JE"
,    Jm = "JM"
,    Jo = "JO"
,    Jp = "JP"
,    Ke = "KE"
,    Kg = "KG"
,    Kh = "KH"
,    Ki = "KI"
,    Km = "KM"
,    Kn = "KN"
,    Kr = "KR"
,    Kw = "KW"
,    Ky = "KY"
,    Kz = "KZ"
,    La = "LA"
,    Lb = "LB"
,    Lc = "LC"
,    Li = "LI"
,    Lk = "LK"
,    Lr = "LR"
,    Ls = "LS"
,    Lt = "LT"
,    Lu = "LU"
,    Lv = "LV"
,    Ly = "LY"
,    Ma = "MA"
,    Mc = "MC"
,    Md = "MD"
,    Me = "ME"
,    Mf = "MF"
,    Mg = "MG"
,    Mh = "MH"
,    Mk = "MK"
,    Ml = "ML"
,    Mm = "MM"
,    Mn = "MN"
,    Mo = "MO"
,    Mp = "MP"
,    Mq = "MQ"
,    Mr = "MR"
,    Ms = "MS"
,    Mt = "MT"
,    Mu = "MU"
,    Mv = "MV"
,    Mw = "MW"
,    Mx = "MX"
,    My = "MY"
,    Mz = "MZ"
,    Na = "NA"
,    Nc = "NC"
,    Ne = "NE"
,    Nf = "NF"
,    Ng = "NG"
,    Ni = "NI"
,    Nl = "NL"
,    No = "NO"
,    Np = "NP"
,    Nr = "NR"
,    Nu = "NU"
,    Nz = "NZ"
,    Om = "OM"
,    Pa = "PA"
,    Pe = "PE"
,    Pf = "PF"
,    Pg = "PG"
,    Ph = "PH"
,    Pk = "PK"
,    Pl = "PL"
,    Pm = "PM"
,    Pn = "PN"
,    Ps = "PS"
,    Pt = "PT"
,    Pw = "PW"
,    Py = "PY"
,    Qa = "QA"
,    Re = "RE"
,    Ro = "RO"
,    Rs = "RS"
,    Ru = "RU"
,    Rw = "RW"
,    Sa = "SA"
,    Sb = "SB"
,    Sc = "SC"
,    Se = "SE"
,    Sg = "SG"
,    Sh = "SH"
,    Si = "SI"
,    Sj = "SJ"
,    Sk = "SK"
,    Sl = "SL"
,    Sm = "SM"
,    Sn = "SN"
,    So = "SO"
,    Sr = "SR"
,    Ss = "SS"
,    St = "ST"
,    Sv = "SV"
,    Sx = "SX"
,    Sz = "SZ"
,    Tc = "TC"
,    Td = "TD"
,    Tf = "TF"
,    Tg = "TG"
,    Th = "TH"
,    Tj = "TJ"
,    Tk = "TK"
,    Tl = "TL"
,    Tm = "TM"
,    Tn = "TN"
,    To = "TO"
,    Tr = "TR"
,    Tt = "TT"
,    Tv = "TV"
,    Tw = "TW"
,    Tz = "TZ"
,    Ua = "UA"
,    Ug = "UG"
,    Um = "UM"
,    Us = "US"
,    Uy = "UY"
,    Uz = "UZ"
,    Va = "VA"
,    Vc = "VC"
,    Ve = "VE"
,    Vg = "VG"
,    Vi = "VI"
,    Vn = "VN"
,    Vu = "VU"
,    Wf = "WF"
,    Ws = "WS"
,    Ye = "YE"
,    Yt = "YT"
,    Za = "ZA"
,    Zm = "ZM"
,    Zw = "ZW"
}

export enum PutShopRequestBodyShopTypeEnum {
    Individual = "individual"
,    Business = "business"
}


export class PutShopRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: PutShopRequestBodyAddress;

  @Metadata({ data: "json, name=currency" })
  currency?: PutShopRequestBodyCurrencyEnum;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=legal_country_code" })
  legalCountryCode?: PutShopRequestBodyLegalCountryCodeEnum;

  @Metadata({ data: "json, name=legal_country_code_confirmed" })
  legalCountryCodeConfirmed?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=payment_policy" })
  paymentPolicy?: string;

  @Metadata({ data: "json, name=return_policy" })
  returnPolicy?: string;

  @Metadata({ data: "json, name=shipping_policy" })
  shippingPolicy?: string;

  @Metadata({ data: "json, name=shop_type" })
  shopType?: PutShopRequestBodyShopTypeEnum;

  @Metadata({ data: "json, name=website" })
  website?: string;
}


export class PutShopSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PutShopRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: PutShopRequestBody;

  @Metadata()
  security: PutShopSecurity;
}


export class PutShopResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
