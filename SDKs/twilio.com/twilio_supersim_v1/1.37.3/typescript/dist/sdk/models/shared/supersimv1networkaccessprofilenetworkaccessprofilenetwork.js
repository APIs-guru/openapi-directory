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
var SupersimV1NetworkAccessProfileNetworkAccessProfileNetwork = /** @class */ (function (_super) {
    __extends(SupersimV1NetworkAccessProfileNetworkAccessProfileNetwork, _super);
    function SupersimV1NetworkAccessProfileNetworkAccessProfileNetwork() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=friendly_name" }),
        __metadata("design:type", String)
    ], SupersimV1NetworkAccessProfileNetworkAccessProfileNetwork.prototype, "friendlyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=identifiers" }),
        __metadata("design:type", Array)
    ], SupersimV1NetworkAccessProfileNetworkAccessProfileNetwork.prototype, "identifiers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iso_country" }),
        __metadata("design:type", String)
    ], SupersimV1NetworkAccessProfileNetworkAccessProfileNetwork.prototype, "isoCountry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=network_access_profile_sid" }),
        __metadata("design:type", String)
    ], SupersimV1NetworkAccessProfileNetworkAccessProfileNetwork.prototype, "networkAccessProfileSid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sid" }),
        __metadata("design:type", String)
    ], SupersimV1NetworkAccessProfileNetworkAccessProfileNetwork.prototype, "sid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], SupersimV1NetworkAccessProfileNetworkAccessProfileNetwork.prototype, "url", void 0);
    return SupersimV1NetworkAccessProfileNetworkAccessProfileNetwork;
}(SpeakeasyBase));
export { SupersimV1NetworkAccessProfileNetworkAccessProfileNetwork };
