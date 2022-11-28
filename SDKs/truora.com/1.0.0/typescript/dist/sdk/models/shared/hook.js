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
export var HookEventTypeEnum;
(function (HookEventTypeEnum) {
    HookEventTypeEnum["All"] = "all";
    HookEventTypeEnum["Check"] = "check";
})(HookEventTypeEnum || (HookEventTypeEnum = {}));
export var HookStatusEnum;
(function (HookStatusEnum) {
    HookStatusEnum["Enabled"] = "enabled";
    HookStatusEnum["Disabled"] = "disabled";
})(HookStatusEnum || (HookStatusEnum = {}));
// Hook
/**
 * Represents a hook configuration
**/
var Hook = /** @class */ (function (_super) {
    __extends(Hook, _super);
    function Hook() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=actions" }),
        __metadata("design:type", Array)
    ], Hook.prototype, "actions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=event_type" }),
        __metadata("design:type", String)
    ], Hook.prototype, "eventType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=signing_key" }),
        __metadata("design:type", String)
    ], Hook.prototype, "signingKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], Hook.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscriber_type" }),
        __metadata("design:type", String)
    ], Hook.prototype, "subscriberType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscriber_url" }),
        __metadata("design:type", String)
    ], Hook.prototype, "subscriberUrl", void 0);
    return Hook;
}(SpeakeasyBase));
export { Hook };
