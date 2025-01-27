import { Vector2 } from "@oasis-engine/math";
import { PointerPhase } from "../enums/PointerPhase";

/**
 * Pointer.
 */
export class Pointer {
  /**
   * Unique id.
   * @remarks Start from 0.
   */
  readonly id: number;
  /** The phase of pointer. */
  phase: PointerPhase = PointerPhase.Leave;
  /** The position of the pointer in screen space pixel coordinates. */
  position: Vector2 = new Vector2();

  /** @internal */
  _uniqueID: number;

  /**
   * @internal
   */
  constructor(id: number) {
    this.id = id;
  }
}
