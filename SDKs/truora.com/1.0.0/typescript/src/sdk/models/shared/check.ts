import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CompanySummary } from "./companysummary";
import { Score } from "./score";
import { Status } from "./status";
import { Summary } from "./summary";
import { VehicleSummary } from "./vehiclesummary";
import { WrongInput } from "./wronginput";


export enum CheckCountryEnum {
    All = "ALL",
    Br = "BR",
    Cl = "CL",
    Co = "CO",
    Cr = "CR",
    Ec = "EC",
    Mx = "MX",
    Pe = "PE",
    Ar = "AR"
}

export enum CheckNativeCountryEnum {
    Ad = "ad",
    Ae = "ae",
    Af = "af",
    Ag = "ag",
    Ai = "ai",
    Al = "al",
    Am = "am",
    An = "an",
    Ao = "ao",
    Aq = "aq",
    Ar = "ar",
    As = "as",
    At = "at",
    Au = "au",
    Aw = "aw",
    Ax = "ax",
    Az = "az",
    Ba = "ba",
    Bb = "bb",
    Bd = "bd",
    Be = "be",
    Bf = "bf",
    Bg = "bg",
    Bh = "bh",
    Bi = "bi",
    Bj = "bj",
    Bm = "bm",
    Bn = "bn",
    Bo = "bo",
    Br = "br",
    Bs = "bs",
    Bt = "bt",
    Bv = "bv",
    Bw = "bw",
    By = "by",
    Bz = "bz",
    Ca = "ca",
    Cc = "cc",
    Cd = "cd",
    Cf = "cf",
    Cg = "cg",
    Ch = "ch",
    Ci = "ci",
    Ck = "ck",
    Cl = "cl",
    Cm = "cm",
    Cn = "cn",
    Co = "co",
    Cr = "cr",
    Cu = "cu",
    Cv = "cv",
    Cx = "cx",
    Cy = "cy",
    Cz = "cz",
    De = "de",
    Dj = "dj",
    Dk = "dk",
    Dm = "dm",
    Do = "do",
    Dz = "dz",
    Ea = "ea",
    Ec = "ec",
    Ee = "ee",
    Eg = "eg",
    Eh = "eh",
    Er = "er",
    Es = "es",
    Et = "et",
    Fi = "fi",
    Fj = "fj",
    Fk = "fk",
    Fm = "fm",
    Fo = "fo",
    Fr = "fr",
    Ga = "ga",
    Gb = "gb",
    Gd = "gd",
    Ge = "ge",
    Gf = "gf",
    Gg = "gg",
    Gh = "gh",
    Gi = "gi",
    Gl = "gl",
    Gm = "gm",
    Gn = "gn",
    Gp = "gp",
    Gq = "gq",
    Gr = "gr",
    Gs = "gs",
    Gt = "gt",
    Gu = "gu",
    Gw = "gw",
    Gy = "gy",
    Hk = "hk",
    Hm = "hm",
    Hn = "hn",
    Hr = "hr",
    Ht = "ht",
    Hu = "hu",
    Id = "id",
    Ie = "ie",
    Il = "il",
    Im = "im",
    In = "in",
    Io = "io",
    Iq = "iq",
    Ir = "ir",
    Is = "is",
    It = "it",
    Je = "je",
    Jm = "jm",
    Jo = "jo",
    Jp = "jp",
    Ke = "ke",
    Kg = "kg",
    Kh = "kh",
    Ki = "ki",
    Km = "km",
    Kn = "kn",
    Kp = "kp",
    Kr = "kr",
    Kw = "kw",
    Ky = "ky",
    Kz = "kz",
    La = "la",
    Lb = "lb",
    Lc = "lc",
    Li = "li",
    Lk = "lk",
    Lr = "lr",
    Ls = "ls",
    Lt = "lt",
    Lu = "lu",
    Lv = "lv",
    Ly = "ly",
    Ma = "ma",
    Mc = "mc",
    Md = "md",
    Me = "me",
    Mg = "mg",
    Mh = "mh",
    Mk = "mk",
    Ml = "ml",
    Mm = "mm",
    Mn = "mn",
    Mo = "mo",
    Mp = "mp",
    Mq = "mq",
    Mr = "mr",
    Ms = "ms",
    Mt = "mt",
    Mu = "mu",
    Mv = "mv",
    Mw = "mw",
    Mx = "mx",
    My = "my",
    Mz = "mz",
    Na = "na",
    Nc = "nc",
    Ne = "ne",
    Nf = "nf",
    Ng = "ng",
    Ni = "ni",
    Nl = "nl",
    No = "no",
    Np = "np",
    Nr = "nr",
    Nu = "nu",
    Nz = "nz",
    Om = "om",
    Pa = "pa",
    Pe = "pe",
    Pf = "pf",
    Pg = "pg",
    Ph = "ph",
    Pk = "pk",
    Pl = "pl",
    Pm = "pm",
    Pn = "pn",
    Pr = "pr",
    Ps = "ps",
    Pt = "pt",
    Pw = "pw",
    Py = "py",
    Qa = "qa",
    Re = "re",
    Ro = "ro",
    Rs = "rs",
    Ru = "ru",
    Rw = "rw",
    Sa = "sa",
    Sb = "sb",
    Sc = "sc",
    Sd = "sd",
    Se = "se",
    Sg = "sg",
    Sh = "sh",
    Si = "si",
    Sj = "sj",
    Sk = "sk",
    Sl = "sl",
    Sm = "sm",
    Sn = "sn",
    So = "so",
    Sr = "sr",
    St = "st",
    Sv = "sv",
    Sy = "sy",
    Sz = "sz",
    Tc = "tc",
    Td = "td",
    Tf = "tf",
    Tg = "tg",
    Th = "th",
    Tj = "tj",
    Tk = "tk",
    Tl = "tl",
    Tm = "tm",
    Tn = "tn",
    To = "to",
    Tr = "tr",
    Tt = "tt",
    Tv = "tv",
    Tw = "tw",
    Tz = "tz",
    Ua = "ua",
    Ug = "ug",
    Um = "um",
    Us = "us",
    Uy = "uy",
    Uz = "uz",
    Va = "va",
    Vc = "vc",
    Ve = "ve",
    Vg = "vg",
    Vi = "vi",
    Vn = "vn",
    Vu = "vu",
    Wf = "wf",
    Ws = "ws",
    Ye = "ye",
    Yt = "yt",
    Za = "za",
    Zm = "zm",
    Zw = "zw"
}

export enum CheckRegionEnum {
    Df = "DF",
    Ac = "AC",
    Al = "AL",
    Ap = "AP",
    Am = "AM",
    Ba = "BA",
    Ce = "CE",
    Es = "ES",
    Go = "GO",
    Ma = "MA",
    Mt = "MT",
    Ms = "MS",
    Mg = "MG",
    Pa = "PA",
    Pb = "PB",
    Pr = "PR",
    Pe = "PE",
    Pi = "PI",
    Rj = "RJ",
    Rn = "RN",
    Rs = "RS",
    Ro = "RO",
    Rr = "RR",
    Sc = "SC",
    Sp = "SP",
    Se = "SE",
    To = "TO"
}

export enum CheckStatusEnum {
    NotStarted = "not_started",
    InProgress = "in_progress",
    Completed = "completed",
    Error = "error",
    Delayed = "delayed"
}


// Check
/** 
 * Represents a background check
**/
export class Check extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=birth_certificate" })
  birthCertificate?: string;

  @SpeakeasyMetadata({ data: "json, name=check_id" })
  checkId: string;

  @SpeakeasyMetadata({ data: "json, name=company_summary" })
  companySummary?: CompanySummary;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country: CheckCountryEnum;

  @SpeakeasyMetadata({ data: "json, name=creation_date" })
  creationDate: Date;

  @SpeakeasyMetadata({ data: "json, name=date_of_birth" })
  dateOfBirth?: Date;

  @SpeakeasyMetadata({ data: "json, name=diplomatic_id" })
  diplomaticId?: string;

  @SpeakeasyMetadata({ data: "json, name=driver_license" })
  driverLicense?: string;

  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=foreign_id" })
  foreignId?: string;

  @SpeakeasyMetadata({ data: "json, name=homonym_probability" })
  homonymProbability?: number;

  @SpeakeasyMetadata({ data: "json, name=homonym_score" })
  homonymScore?: number;

  @SpeakeasyMetadata({ data: "json, name=homonym_scores", elemType: Score })
  homonymScores?: Score[];

  @SpeakeasyMetadata({ data: "json, name=id_score" })
  idScore: number;

  @SpeakeasyMetadata({ data: "json, name=issue_date" })
  issueDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=last_name" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=license_plate" })
  licensePlate?: string;

  @SpeakeasyMetadata({ data: "json, name=national_id" })
  nationalId?: string;

  @SpeakeasyMetadata({ data: "json, name=native_country" })
  nativeCountry?: CheckNativeCountryEnum;

  @SpeakeasyMetadata({ data: "json, name=owner_document_id" })
  ownerDocumentId?: string;

  @SpeakeasyMetadata({ data: "json, name=owner_document_type" })
  ownerDocumentType?: string;

  @SpeakeasyMetadata({ data: "json, name=passport" })
  passport?: string;

  @SpeakeasyMetadata({ data: "json, name=payment_date" })
  paymentDate?: string;

  @SpeakeasyMetadata({ data: "json, name=pep" })
  pep?: string;

  @SpeakeasyMetadata({ data: "json, name=phone_number" })
  phoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=professional_card" })
  professionalCard?: string;

  @SpeakeasyMetadata({ data: "json, name=ptp" })
  ptp?: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: CheckRegionEnum;

  @SpeakeasyMetadata({ data: "json, name=report_id" })
  reportId?: string;

  @SpeakeasyMetadata({ data: "json, name=score" })
  score: number;

  @SpeakeasyMetadata({ data: "json, name=scores", elemType: Score })
  scores?: Score[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: CheckStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=statuses", elemType: Status })
  statuses: Status[];

  @SpeakeasyMetadata({ data: "json, name=summary" })
  summary: Summary;

  @SpeakeasyMetadata({ data: "json, name=tax_id" })
  taxId?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: any;

  @SpeakeasyMetadata({ data: "json, name=update_date" })
  updateDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=vehicle_id" })
  vehicleId?: string;

  @SpeakeasyMetadata({ data: "json, name=vehicle_summary" })
  vehicleSummary?: VehicleSummary;

  @SpeakeasyMetadata({ data: "json, name=wrong_inputs", elemType: WrongInput })
  wrongInputs?: WrongInput[];
}
