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
import { V3Departure } from "./v3departure";
import { V3Direction } from "./v3direction";
import { V3Disruption } from "./v3disruption";
import { V3Run } from "./v3run";
import { V3Status } from "./v3status";
import { V3StopModel } from "./v3stopmodel";
var V3DeparturesResponse = /** @class */ (function (_super) {
    __extends(V3DeparturesResponse, _super);
    function V3DeparturesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=departures", elemType: V3Departure }),
        __metadata("design:type", Array)
    ], V3DeparturesResponse.prototype, "departures", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=directions", elemType: V3Direction }),
        __metadata("design:type", Map)
    ], V3DeparturesResponse.prototype, "directions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disruptions", elemType: V3Disruption }),
        __metadata("design:type", Map)
    ], V3DeparturesResponse.prototype, "disruptions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=routes" }),
        __metadata("design:type", Map)
    ], V3DeparturesResponse.prototype, "routes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=runs", elemType: V3Run }),
        __metadata("design:type", Map)
    ], V3DeparturesResponse.prototype, "runs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", V3Status)
    ], V3DeparturesResponse.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stops", elemType: V3StopModel }),
        __metadata("design:type", Map)
    ], V3DeparturesResponse.prototype, "stops", void 0);
    return V3DeparturesResponse;
}(SpeakeasyBase));
export { V3DeparturesResponse };
