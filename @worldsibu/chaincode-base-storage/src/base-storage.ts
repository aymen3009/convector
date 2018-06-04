export abstract class BaseStorage {
  /**
   * Current storage implementation
   */
  public static current: BaseStorage;

  public async abstract get(id: string): Promise<any>;
  public async abstract set(id: string, content: any);
  public async abstract delete(id: string);
}
