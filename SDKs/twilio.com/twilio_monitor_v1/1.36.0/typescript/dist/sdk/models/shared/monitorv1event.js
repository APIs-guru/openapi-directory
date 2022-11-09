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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
var MonitorV1Event = /** @class */ (function (_super) {
    __extends(MonitorV1Event, _super);
    function MonitorV1Event() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=account_sid" }),
        __metadata("design:type", String)
    ], MonitorV1Event.prototype, "accountSid", void 0);
    __decorate([
        Metadata({ data: "json, name=actor_sid" }),
        __metadata("design:type", String)
    ], MonitorV1Event.prototype, "actorSid", void 0);
    __decorate([
        Metadata({ data: "json, name=actor_type" }),
        __metadata("design:type", String)
    ], MonitorV1Event.prototype, "actorType", void 0);
    __decorate([
        Metadata({ data: "json, name=description" }),
        __metadata("design:type", String)
    ], MonitorV1Event.prototype, "description", void 0);
    __decorate([
        Metadata({ data: "json, name=event_data" }),
        __metadata("design:type", Object)
    ], MonitorV1Event.prototype, "eventData", void 0);
    __decorate([
        Metadata({ data: "json, name=event_date" }),
        __metadata("design:type", Date)
    ], MonitorV1Event.prototype, "eventDate", void 0);
    __decorate([
        Metadata({ data: "json, name=event_type" }),
        __metadata("design:type", String)
    ], MonitorV1Event.prototype, "eventType", void 0);
    __decorate([
        Metadata({ data: "json, name=links" }),
        __metadata("design:type", Map)
    ], MonitorV1Event.prototype, "links", void 0);
    __decorate([
        Metadata({ data: "json, name=resource_sid" }),
        __metadata("design:type", String)
    ], MonitorV1Event.prototype, "resourceSid", void 0);
    __decorate([
        Metadata({ data: "json, name=resource_type" }),
        __metadata("design:type", String)
    ], MonitorV1Event.prototype, "resourceType", void 0);
    __decorate([
        Metadata({ data: "json, name=sid" }),
        __metadata("design:type", String)
    ], MonitorV1Event.prototype, "sid", void 0);
    __decorate([
        Metadata({ data: "json, name=source" }),
        __metadata("design:type", String)
    ], MonitorV1Event.prototype, "source", void 0);
    __decorate([
        Metadata({ data: "json, name=source_ip_address" }),
        __metadata("design:type", String)
    ], MonitorV1Event.prototype, "sourceIpAddress", void 0);
    __decorate([
        Metadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], MonitorV1Event.prototype, "url", void 0);
    return MonitorV1Event;
}(SpeakeasyBase));
export { MonitorV1Event };
