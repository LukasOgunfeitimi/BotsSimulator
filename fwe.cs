using System;

// Token: 0x020000F0 RID: 240
internal class BitClass
{
	// Token: 0x060005C0 RID: 1472 RVA: 0x00008085 File Offset: 0x00006285
	public BitClass()
	{
		this.\uE001(true);
	}

	// Token: 0x060005C1 RID: 1473 RVA: 0x000080AC File Offset: 0x000062AC
	public void \uE000(bool \uE000)
	{
		this.\uE001(\uE000);
	}

	// Token: 0x060005C2 RID: 1474 RVA: 0x000080B5 File Offset: 0x000062B5
	private void \uE001(bool \uE000)
	{
		BitClass.\uE00D(this.encKeys, \uE000);
		this.\uE002 = false;
		this.\uE003 = false;
	}

	// Token: 0x060005C3 RID: 1475 RVA: 0x0002CDFC File Offset: 0x0002AFFC
	public void \uE002(byte[] \uE000, int \uE001, int \uE002)
	{
		if (\uE000 == null)
		{
			throw new ArgumentNullException(Obfuscator.\uE000(21760));
		}
		if (this.\uE003)
		{
			throw new Exception(Obfuscator.\uE000(21770));
		}
		this.\uE002 = true;
		BitClass.\uE00E(this.encKeys, \uE000, (uint)\uE001, (uint)\uE002);
	}

	// Token: 0x060005C4 RID: 1476 RVA: 0x000080D1 File Offset: 0x000062D1
	public byte[] \uE003()
	{
		this.\uE003 = true;
		BitClass.\uE00F(this.final, this.encKeys);
		return this.\uE015;
	}

	// Token: 0x170000DC RID: 220
	// (get) Token: 0x060005C5 RID: 1477 RVA: 0x000080F1 File Offset: 0x000062F1
	public byte[] \uE015
	{
		get
		{
			if (!this.\uE002)
			{
				throw new NullReferenceException();
			}
			if (!this.\uE003)
			{
				throw new Exception(Obfuscator.\uE000(21827));
			}
			return this.final;
		}
	}

	// Token: 0x170000DD RID: 221
	// (get) Token: 0x060005C6 RID: 1478 RVA: 0x0000811F File Offset: 0x0000631F
	public int \uE016
	{
		get
		{
			return this.final.Length * 8;
		}
	}

	// Token: 0x060005C7 RID: 1479 RVA: 0x0000812B File Offset: 0x0000632B
	static BitClass()
	{
		BitClass.\uE014[0] = 128;
	}

	// Token: 0x060005C8 RID: 1480 RVA: 0x00008145 File Offset: 0x00006345
	private static uint \uE004(uint \uE000, uint \uE001, uint \uE002)
	{
		return (\uE000 & \uE001) | (~\uE000 & \uE002);
	}

	// Token: 0x060005C9 RID: 1481 RVA: 0x0000814F File Offset: 0x0000634F
	private static uint \uE005(uint \uE000, uint \uE001, uint \uE002)
	{
		return (\uE000 & \uE002) | (\uE001 & ~\uE002);
	}

	// Token: 0x060005CA RID: 1482 RVA: 0x00008159 File Offset: 0x00006359
	private static uint \uE006(uint \uE000, uint \uE001, uint \uE002)
	{
		return \uE000 ^ \uE001 ^ \uE002;
	}

	// Token: 0x060005CB RID: 1483 RVA: 0x00008160 File Offset: 0x00006360
	private static uint \uE007(uint \uE000, uint \uE001, uint \uE002)
	{
		return \uE001 ^ (\uE000 | ~\uE002);
	}

	// Token: 0x060005CC RID: 1484 RVA: 0x00006CB0 File Offset: 0x00004EB0
	private static uint \uE008(uint \uE000, int \uE001)
	{
		return \uE000 << \uE001 | \uE000 >> 32 - \uE001;
	}

	// Token: 0x060005CD RID: 1485 RVA: 0x00008168 File Offset: 0x00006368
	private static void \uE009(ref uint \uE000, uint \uE001, uint \uE002, uint \uE003, uint \uE004, int \uE005, uint \uE006)
	{
		\uE000 += BitClass.\uE004(\uE001, \uE002, \uE003) + \uE004 + \uE006;
		\uE000 = BitClass.\uE008(\uE000, \uE005);
		\uE000 += \uE001;
	}

	// Token: 0x060005CE RID: 1486 RVA: 0x0000818E File Offset: 0x0000638E
	private static void \uE00A(ref uint \uE000, uint \uE001, uint \uE002, uint \uE003, uint \uE004, int \uE005, uint \uE006)
	{
		\uE000 += BitClass.\uE005(\uE001, \uE002, \uE003) + \uE004 + \uE006;
		\uE000 = BitClass.\uE008(\uE000, \uE005);
		\uE000 += \uE001;
	}

	// Token: 0x060005CF RID: 1487 RVA: 0x000081B4 File Offset: 0x000063B4
	private static void \uE00B(ref uint \uE000, uint \uE001, uint \uE002, uint \uE003, uint \uE004, int \uE005, uint \uE006)
	{
		\uE000 += BitClass.\uE006(\uE001, \uE002, \uE003) + \uE004 + \uE006;
		\uE000 = BitClass.\uE008(\uE000, \uE005);
		\uE000 += \uE001;
	}

	// Token: 0x060005D0 RID: 1488 RVA: 0x000081DA File Offset: 0x000063DA
	private static void \uE00C(ref uint \uE000, uint \uE001, uint \uE002, uint \uE003, uint \uE004, int \uE005, uint \uE006)
	{
		\uE000 += BitClass.\uE007(\uE001, \uE002, \uE003) + \uE004 + \uE006;
		\uE000 = BitClass.\uE008(\uE000, \uE005);
		\uE000 += \uE001;
	}

	// Token: 0x060005D1 RID: 1489 RVA: 0x0002CE4C File Offset: 0x0002B04C
	private static void \uE00D(BitClass.\uE000 \uE000, bool \uE001)
	{
		\uE000.\uE001[0] = (\uE000.\uE001[1] = 0U);
		if (\uE001)
		{
			\uE000.firstEncKeys[0] = 1732584193U;
			\uE000.firstEncKeys[1] = 4023233417U;
			\uE000.firstEncKeys[2] = 2562383102U;
			\uE000.firstEncKeys[3] = 271733878U;
		}
	}

	// Token: 0x060005D2 RID: 1490 RVA: 0x0002CEA4 File Offset: 0x0002B0A4
	private static void \uE00E(BitClass.\uE000 \uE000, byte[] \uE001, uint \uE002, uint \uE003)
	{
		uint num = \uE000.\uE001[0] >> 3 & 63U;
		if ((\uE000.\uE001[0] += \uE003 << 3) < \uE003 << 3)
		{
			\uE000.\uE001[1] += 1U;
		}
		\uE000.\uE001[1] += \uE003 >> 29;
		uint num2 = 64U - num;
		uint num3 = 0U;
		if (\uE003 >= num2)
		{
			Buffer.BlockCopy(\uE001, (int)\uE002, \uE000.\uE002, (int)num, (int)num2);
			BitClass.\uE010(\uE000.firstEncKeys, \uE000.\uE002, 0U);
			num3 = num2;
			while (num3 + 63U < \uE003)
			{
				BitClass.\uE010(\uE000.firstEncKeys, \uE001, \uE002 + num3);
				num3 += 64U;
			}
			num = 0U;
		}
		Buffer.BlockCopy(\uE001, (int)(\uE002 + num3), \uE000.\uE002, (int)num, (int)(\uE003 - num3));
	}

	// Token: 0x060005D3 RID: 1491 RVA: 0x0002CF60 File Offset: 0x0002B160
	private static void \uE00F(byte[] \uE000, BitClass.\uE000 \uE001)
	{
		byte[] array = new byte[8];
		BitClass.\uE011(array, \uE001.\uE001, 8U);
		uint num = \uE001.\uE001[0] >> 3 & 63U;
		uint uE = (num < 56U) ? (56U - num) : (120U - num);
		BitClass.\uE00E(\uE001, BitClass.\uE014, 0U, uE);
		BitClass.\uE00E(\uE001, array, 0U, 8U);
		BitClass.\uE011(\uE000, \uE001.firstEncKeys, 16U);
	}

	// Token: 0x060005D4 RID: 1492 RVA: 0x0002CFC4 File Offset: 0x0002B1C4
	private static void \uE010(uint[] \uE000, byte[] \uE001, uint \uE002)
	{
		uint num = \uE000[0];
		uint num2 = \uE000[1];
		uint num3 = \uE000[2];
		uint num4 = \uE000[3];
		uint[] array = new uint[16];
		BitClass.\uE012(array, \uE001, \uE002, 64U);
		BitClass.\uE009(ref num, num2, num3, num4, array[0], 7, 3614090360U);
		BitClass.\uE009(ref num4, num, num2, num3, array[1], 12, 3905402710U);
		BitClass.\uE009(ref num3, num4, num, num2, array[2], 17, 606105819U);
		BitClass.\uE009(ref num2, num3, num4, num, array[3], 22, 3250441966U);
		BitClass.\uE009(ref num, num2, num3, num4, array[4], 7, 4118548399U);
		BitClass.\uE009(ref num4, num, num2, num3, array[5], 12, 1200080426U);
		BitClass.\uE009(ref num3, num4, num, num2, array[6], 17, 2821735955U);
		BitClass.\uE009(ref num2, num3, num4, num, array[7], 22, 4249261313U);
		BitClass.\uE009(ref num, num2, num3, num4, array[8], 7, 1770035416U);
		BitClass.\uE009(ref num4, num, num2, num3, array[9], 12, 2336552879U);
		BitClass.\uE009(ref num3, num4, num, num2, array[10], 17, 4294925233U);
		BitClass.\uE009(ref num2, num3, num4, num, array[11], 22, 2304563134U);
		BitClass.\uE009(ref num, num2, num3, num4, array[12], 7, 1804603682U);
		BitClass.\uE009(ref num4, num, num2, num3, array[13], 12, 4254626195U);
		BitClass.\uE009(ref num3, num4, num, num2, array[14], 17, 2792965006U);
		BitClass.\uE009(ref num2, num3, num4, num, array[15], 22, 1236535329U);
		BitClass.\uE00A(ref num, num2, num3, num4, array[1], 5, 4129170786U);
		BitClass.\uE00A(ref num4, num, num2, num3, array[6], 9, 3225465664U);
		BitClass.\uE00A(ref num3, num4, num, num2, array[11], 14, 643717713U);
		BitClass.\uE00A(ref num2, num3, num4, num, array[0], 20, 3921069994U);
		BitClass.\uE00A(ref num, num2, num3, num4, array[5], 5, 3593408605U);
		BitClass.\uE00A(ref num4, num, num2, num3, array[10], 9, 38016083U);
		BitClass.\uE00A(ref num3, num4, num, num2, array[15], 14, 3634488961U);
		BitClass.\uE00A(ref num2, num3, num4, num, array[4], 20, 3889429448U);
		BitClass.\uE00A(ref num, num2, num3, num4, array[9], 5, 568446438U);
		BitClass.\uE00A(ref num4, num, num2, num3, array[14], 9, 3275163606U);
		BitClass.\uE00A(ref num3, num4, num, num2, array[3], 14, 4107603335U);
		BitClass.\uE00A(ref num2, num3, num4, num, array[8], 20, 1163531501U);
		BitClass.\uE00A(ref num, num2, num3, num4, array[13], 5, 2850285829U);
		BitClass.\uE00A(ref num4, num, num2, num3, array[2], 9, 4243563512U);
		BitClass.\uE00A(ref num3, num4, num, num2, array[7], 14, 1735328473U);
		BitClass.\uE00A(ref num2, num3, num4, num, array[12], 20, 2368359562U);
		BitClass.\uE00B(ref num, num2, num3, num4, array[5], 4, 4294588738U);
		BitClass.\uE00B(ref num4, num, num2, num3, array[8], 11, 2272392833U);
		BitClass.\uE00B(ref num3, num4, num, num2, array[11], 16, 1839030562U);
		BitClass.\uE00B(ref num2, num3, num4, num, array[14], 23, 4259657740U);
		BitClass.\uE00B(ref num, num2, num3, num4, array[1], 4, 2763975236U);
		BitClass.\uE00B(ref num4, num, num2, num3, array[4], 11, 1272893353U);
		BitClass.\uE00B(ref num3, num4, num, num2, array[7], 16, 4139469664U);
		BitClass.\uE00B(ref num2, num3, num4, num, array[10], 23, 3200236656U);
		BitClass.\uE00B(ref num, num2, num3, num4, array[13], 4, 681279174U);
		BitClass.\uE00B(ref num4, num, num2, num3, array[0], 11, 3936430074U);
		BitClass.\uE00B(ref num3, num4, num, num2, array[3], 16, 3572445317U);
		BitClass.\uE00B(ref num2, num3, num4, num, array[6], 23, 76029189U);
		BitClass.\uE00B(ref num, num2, num3, num4, array[9], 4, 3654602809U);
		BitClass.\uE00B(ref num4, num, num2, num3, array[12], 11, 3873151461U);
		BitClass.\uE00B(ref num3, num4, num, num2, array[15], 16, 530742520U);
		BitClass.\uE00B(ref num2, num3, num4, num, array[2], 23, 3299628645U);
		BitClass.\uE00C(ref num, num2, num3, num4, array[0], 6, 4096336452U);
		BitClass.\uE00C(ref num4, num, num2, num3, array[7], 10, 1126891415U);
		BitClass.\uE00C(ref num3, num4, num, num2, array[14], 15, 2878612391U);
		BitClass.\uE00C(ref num2, num3, num4, num, array[5], 21, 4237533241U);
		BitClass.\uE00C(ref num, num2, num3, num4, array[12], 6, 1700485571U);
		BitClass.\uE00C(ref num4, num, num2, num3, array[3], 10, 2399980690U);
		BitClass.\uE00C(ref num3, num4, num, num2, array[10], 15, 4293915773U);
		BitClass.\uE00C(ref num2, num3, num4, num, array[1], 21, 2240044497U);
		BitClass.\uE00C(ref num, num2, num3, num4, array[8], 6, 1873313359U);
		BitClass.\uE00C(ref num4, num, num2, num3, array[15], 10, 4264355552U);
		BitClass.\uE00C(ref num3, num4, num, num2, array[6], 15, 2734768916U);
		BitClass.\uE00C(ref num2, num3, num4, num, array[13], 21, 1309151649U);
		BitClass.\uE00C(ref num, num2, num3, num4, array[4], 6, 4149444226U);
		BitClass.\uE00C(ref num4, num, num2, num3, array[11], 10, 3174756917U);
		BitClass.\uE00C(ref num3, num4, num, num2, array[2], 15, 718787259U);
		BitClass.\uE00C(ref num2, num3, num4, num, array[9], 21, 3951481745U);
		\uE000[0] += num;
		\uE000[1] += num2;
		\uE000[2] += num3;
		\uE000[3] += num4;
		Array.Clear(array, 0, array.Length);
	}

	// Token: 0x060005D5 RID: 1493 RVA: 0x0002D580 File Offset: 0x0002B780
	private static void \uE011(byte[] \uE000, uint[] \uE001, uint \uE002)
	{
		uint num = 0U;
		for (uint num2 = 0U; num2 < \uE002; num2 += 4U)
		{
			\uE000[(int)num2] = (byte)(\uE001[(int)num] & 255U);
			\uE000[(int)(num2 + 1U)] = (byte)(\uE001[(int)num] >> 8 & 255U);
			\uE000[(int)(num2 + 2U)] = (byte)(\uE001[(int)num] >> 16 & 255U);
			\uE000[(int)(num2 + 3U)] = (byte)(\uE001[(int)num] >> 24 & 255U);
			num += 1U;
		}
	}

	// Token: 0x060005D6 RID: 1494 RVA: 0x0002D5E4 File Offset: 0x0002B7E4
	private static void \uE012(uint[] \uE000, byte[] \uE001, uint \uE002, uint \uE003)
	{
		uint num = 0U;
		for (uint num2 = 0U; num2 < \uE003; num2 += 4U)
		{
			\uE000[(int)num] = (uint)((int)\uE001[(int)(\uE002 + num2)] | (int)\uE001[(int)(\uE002 + num2 + 1U)] << 8 | (int)\uE001[(int)(\uE002 + num2 + 2U)] << 16 | (int)\uE001[(int)(\uE002 + num2 + 3U)] << 24);
			num += 1U;
		}
	}

	// Token: 0x04000609 RID: 1545
	private readonly BitClass.\uE000 encKeys = new BitClass.\uE000();

	// Token: 0x0400060A RID: 1546
	private readonly byte[] final = new byte[16];

	// Token: 0x0400060B RID: 1547
	private bool \uE002;

	// Token: 0x0400060C RID: 1548
	private bool \uE003;

	// Token: 0x0400060D RID: 1549
	private const int \uE004 = 7;

	// Token: 0x0400060E RID: 1550
	private const int \uE005 = 12;

	// Token: 0x0400060F RID: 1551
	private const int \uE006 = 17;

	// Token: 0x04000610 RID: 1552
	private const int \uE007 = 22;

	// Token: 0x04000611 RID: 1553
	private const int \uE008 = 5;

	// Token: 0x04000612 RID: 1554
	private const int \uE009 = 9;

	// Token: 0x04000613 RID: 1555
	private const int \uE00A = 14;

	// Token: 0x04000614 RID: 1556
	private const int \uE00B = 20;

	// Token: 0x04000615 RID: 1557
	private const int \uE00C = 4;

	// Token: 0x04000616 RID: 1558
	private const int \uE00D = 11;

	// Token: 0x04000617 RID: 1559
	private const int \uE00E = 16;

	// Token: 0x04000618 RID: 1560
	private const int \uE00F = 23;

	// Token: 0x04000619 RID: 1561
	private const int \uE010 = 6;

	// Token: 0x0400061A RID: 1562
	private const int \uE011 = 10;

	// Token: 0x0400061B RID: 1563
	private const int \uE012 = 15;

	// Token: 0x0400061C RID: 1564
	private const int \uE013 = 21;

	// Token: 0x0400061D RID: 1565
	private static byte[] \uE014 = new byte[64];

	// Token: 0x020000F1 RID: 241
	private class \uE000
	{
		// Token: 0x060005D7 RID: 1495 RVA: 0x00008200 File Offset: 0x00006400
		public \uE000()
		{
			this.firstEncKeys = new uint[4];
			this.\uE001 = new uint[2];
			this.\uE002 = new byte[64];
		}

		// Token: 0x060005D8 RID: 1496 RVA: 0x0000822D File Offset: 0x0000642D
		public void \uE000()
		{
			Array.Clear(this.firstEncKeys, 0, this.firstEncKeys.Length);
			Array.Clear(this.\uE001, 0, this.\uE001.Length);
			Array.Clear(this.\uE002, 0, this.\uE002.Length);
		}

		// Token: 0x0400061E RID: 1566
		public readonly uint[] firstEncKeys;

		// Token: 0x0400061F RID: 1567
		public readonly uint[] \uE001;

		// Token: 0x04000620 RID: 1568
		public readonly byte[] \uE002;
	}
}
