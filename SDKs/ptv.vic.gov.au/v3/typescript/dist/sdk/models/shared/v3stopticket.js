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
var V3StopTicket = /** @class */ (function (_super) {
    __extends(V3StopTicket, _super);
    function V3StopTicket() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=is_free_fare_zone" }),
        __metadata("design:type", Boolean)
    ], V3StopTicket.prototype, "isFreeFareZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ticket_checks" }),
        __metadata("design:type", Boolean)
    ], V3StopTicket.prototype, "ticketChecks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ticket_machine" }),
        __metadata("design:type", Boolean)
    ], V3StopTicket.prototype, "ticketMachine", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ticket_type" }),
        __metadata("design:type", String)
    ], V3StopTicket.prototype, "ticketType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ticket_zones" }),
        __metadata("design:type", Array)
    ], V3StopTicket.prototype, "ticketZones", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vline_reservation" }),
        __metadata("design:type", Boolean)
    ], V3StopTicket.prototype, "vlineReservation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=zone" }),
        __metadata("design:type", String)
    ], V3StopTicket.prototype, "zone", void 0);
    return V3StopTicket;
}(SpeakeasyBase));
export { V3StopTicket };
