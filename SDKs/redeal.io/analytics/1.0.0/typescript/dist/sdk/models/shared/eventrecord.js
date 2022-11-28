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
var EventRecord = /** @class */ (function (_super) {
    __extends(EventRecord, _super);
    function EventRecord() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=agent" }),
        __metadata("design:type", String)
    ], EventRecord.prototype, "agent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=browsertype" }),
        __metadata("design:type", String)
    ], EventRecord.prototype, "browsertype", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=channel" }),
        __metadata("design:type", String)
    ], EventRecord.prototype, "channel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=click" }),
        __metadata("design:type", String)
    ], EventRecord.prototype, "click", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=clicks" }),
        __metadata("design:type", Number)
    ], EventRecord.prototype, "clicks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], EventRecord.prototype, "code", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=company" }),
        __metadata("design:type", String)
    ], EventRecord.prototype, "company", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contact" }),
        __metadata("design:type", String)
    ], EventRecord.prototype, "contact", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cost" }),
        __metadata("design:type", Number)
    ], EventRecord.prototype, "cost", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=costcurrency" }),
        __metadata("design:type", String)
    ], EventRecord.prototype, "costcurrency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], EventRecord.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deal" }),
        __metadata("design:type", String)
    ], EventRecord.prototype, "deal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deal name" }),
        __metadata("design:type", String)
    ], EventRecord.prototype, "dealName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=delay" }),
        __metadata("design:type", Number)
    ], EventRecord.prototype, "delay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=denyreason" }),
        __metadata("design:type", String)
    ], EventRecord.prototype, "denyreason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=device" }),
        __metadata("design:type", String)
    ], EventRecord.prototype, "device", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=devicetype" }),
        __metadata("design:type", String)
    ], EventRecord.prototype, "devicetype", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], EventRecord.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=emailaddrsha256" }),
        __metadata("design:type", String)
    ], EventRecord.prototype, "emailaddrsha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flow" }),
        __metadata("design:type", String)
    ], EventRecord.prototype, "flow", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flowstep" }),
        __metadata("design:type", String)
    ], EventRecord.prototype, "flowstep", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=flowtype" }),
        __metadata("design:type", String)
    ], EventRecord.prototype, "flowtype", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=impression" }),
        __metadata("design:type", String)
    ], EventRecord.prototype, "impression", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip" }),
        __metadata("design:type", String)
    ], EventRecord.prototype, "ip", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=latitude" }),
        __metadata("design:type", String)
    ], EventRecord.prototype, "latitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=longitude" }),
        __metadata("design:type", String)
    ], EventRecord.prototype, "longitude", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=optin" }),
        __metadata("design:type", String)
    ], EventRecord.prototype, "optin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=os" }),
        __metadata("design:type", String)
    ], EventRecord.prototype, "os", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=resolution" }),
        __metadata("design:type", String)
    ], EventRecord.prototype, "resolution", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=revenue" }),
        __metadata("design:type", Number)
    ], EventRecord.prototype, "revenue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=role" }),
        __metadata("design:type", String)
    ], EventRecord.prototype, "role", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=session" }),
        __metadata("design:type", String)
    ], EventRecord.prototype, "session", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=site" }),
        __metadata("design:type", String)
    ], EventRecord.prototype, "site", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=site name" }),
        __metadata("design:type", String)
    ], EventRecord.prototype, "siteName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timestamp" }),
        __metadata("design:type", Date)
    ], EventRecord.prototype, "timestamp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=total" }),
        __metadata("design:type", Number)
    ], EventRecord.prototype, "total", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user" }),
        __metadata("design:type", String)
    ], EventRecord.prototype, "user", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userlanguage" }),
        __metadata("design:type", String)
    ], EventRecord.prototype, "userlanguage", void 0);
    return EventRecord;
}(SpeakeasyBase));
export { EventRecord };
