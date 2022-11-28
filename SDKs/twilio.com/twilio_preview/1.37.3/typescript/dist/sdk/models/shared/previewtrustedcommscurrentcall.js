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
var PreviewTrustedCommsCurrentCall = /** @class */ (function (_super) {
    __extends(PreviewTrustedCommsCurrentCall, _super);
    function PreviewTrustedCommsCurrentCall() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bg_color" }),
        __metadata("design:type", String)
    ], PreviewTrustedCommsCurrentCall.prototype, "bgColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=caller" }),
        __metadata("design:type", String)
    ], PreviewTrustedCommsCurrentCall.prototype, "caller", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], PreviewTrustedCommsCurrentCall.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=font_color" }),
        __metadata("design:type", String)
    ], PreviewTrustedCommsCurrentCall.prototype, "fontColor", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=from" }),
        __metadata("design:type", String)
    ], PreviewTrustedCommsCurrentCall.prototype, "from", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logo" }),
        __metadata("design:type", String)
    ], PreviewTrustedCommsCurrentCall.prototype, "logo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=manager" }),
        __metadata("design:type", String)
    ], PreviewTrustedCommsCurrentCall.prototype, "manager", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reason" }),
        __metadata("design:type", String)
    ], PreviewTrustedCommsCurrentCall.prototype, "reason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=shield_img" }),
        __metadata("design:type", String)
    ], PreviewTrustedCommsCurrentCall.prototype, "shieldImg", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sid" }),
        __metadata("design:type", String)
    ], PreviewTrustedCommsCurrentCall.prototype, "sid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], PreviewTrustedCommsCurrentCall.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=to" }),
        __metadata("design:type", String)
    ], PreviewTrustedCommsCurrentCall.prototype, "to", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], PreviewTrustedCommsCurrentCall.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=use_case" }),
        __metadata("design:type", String)
    ], PreviewTrustedCommsCurrentCall.prototype, "useCase", void 0);
    return PreviewTrustedCommsCurrentCall;
}(SpeakeasyBase));
export { PreviewTrustedCommsCurrentCall };
