var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
export var OsNameEnum;
(function (OsNameEnum) {
    OsNameEnum["Debian"] = "debian";
    OsNameEnum["Kali"] = "kali";
    OsNameEnum["Ubuntu"] = "ubuntu";
    OsNameEnum["Redhat"] = "redhat";
    OsNameEnum["Centos"] = "centos";
    OsNameEnum["Fedora"] = "fedora";
    OsNameEnum["Suse"] = "suse";
    OsNameEnum["Oracle"] = "oracle";
    OsNameEnum["Scientific"] = "scientific";
    OsNameEnum["Slackware"] = "slackware";
    OsNameEnum["Xp"] = "xp";
    OsNameEnum["Vista"] = "vista";
    OsNameEnum["Seven"] = "seven";
    OsNameEnum["Ten"] = "10";
    OsNameEnum["TwoThousand"] = "2000";
    OsNameEnum["TwoThousandAndThree"] = "2003";
    OsNameEnum["TwoThousandAndEightR2"] = "2008 r2";
    OsNameEnum["TwoThousandAndTwelve"] = "2012";
    OsNameEnum["TwoThousandAndTwelveR2"] = "2012 r2";
    OsNameEnum["TwoThousandAndSixteen"] = "2016";
})(OsNameEnum || (OsNameEnum = {}));
export var OsTypeEnum;
(function (OsTypeEnum) {
    OsTypeEnum["Linux"] = "linux";
    OsTypeEnum["Windows"] = "windows";
    OsTypeEnum["Solaris"] = "solaris";
    OsTypeEnum["Aix"] = "aix";
    OsTypeEnum["Freebsd"] = "freebsd";
    OsTypeEnum["Unknown"] = "unknown";
})(OsTypeEnum || (OsTypeEnum = {}));
var Os = /** @class */ (function (_super) {
    __extends(Os, _super);
    function Os() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fullName" }),
        __metadata("design:type", String)
    ], Os.prototype, "fullName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Os.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=servicePack" }),
        __metadata("design:type", String)
    ], Os.prototype, "servicePack", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], Os.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=version" }),
        __metadata("design:type", String)
    ], Os.prototype, "version", void 0);
    return Os;
}(SpeakeasyBase));
export { Os };
