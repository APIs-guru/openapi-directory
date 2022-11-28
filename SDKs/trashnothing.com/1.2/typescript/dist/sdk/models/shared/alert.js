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
// Alert
/**
 * A search alert that the user has created so that they can be notified when new posts match the search query specified by the alert.
**/
var Alert = /** @class */ (function (_super) {
    __extends(Alert, _super);
    function Alert() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alert_id" }),
        __metadata("design:type", String)
    ], Alert.prototype, "alertId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_sent" }),
        __metadata("design:type", Date)
    ], Alert.prototype, "lastSent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=search" }),
        __metadata("design:type", String)
    ], Alert.prototype, "search", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=send_count" }),
        __metadata("design:type", Number)
    ], Alert.prototype, "sendCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=types" }),
        __metadata("design:type", Array)
    ], Alert.prototype, "types", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user_id" }),
        __metadata("design:type", String)
    ], Alert.prototype, "userId", void 0);
    return Alert;
}(SpeakeasyBase));
export { Alert };
